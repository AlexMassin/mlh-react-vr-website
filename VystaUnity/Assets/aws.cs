using System.Collections;
using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Video;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.Runtime;
using Amazon.MissingTypes;
using System.IO;
using Amazon.S3.Util;
using Amazon.CognitoIdentity;
using System.Threading.Tasks;




public class aws : MonoBehaviour
{
    private VideoPlayer player = null;
    public string IdentityPoolId = "us-west-2:b0f114de-617e-4a9b-a55b-94cc803943d0";
    public static int bufferSize = 12;
    public string s3BucketName = "cambucket21";
    public Button BeginButton = null;
    public GameObject canvas = null;
    public Text ResultText = null;
    public Text ButtonText = null;

    #region Copied_stuff
    private string CognitoIdentityRegion = RegionEndpoint.USWest2.SystemName;
    private RegionEndpoint _CognitoIdentityRegion
    {
        get { return RegionEndpoint.GetBySystemName(CognitoIdentityRegion); }
    }
    private string S3Region = RegionEndpoint.USWest2.SystemName;
    private RegionEndpoint _S3Region
    {
        get { return RegionEndpoint.GetBySystemName(S3Region); }
    }


    #endregion
    private int bufferPos = 1;
    private int bufferLastPos = 6;
    private int bufferLastLastPos = 5;
    private string[] vids = new string[bufferSize];

    private Boolean needNext = true;
    private Boolean playing = false;
    private Boolean begun = false;
    private Boolean loadComplete = false;
    private string pathToNext;
    private string currentPath;
    private string filetype = ".mp4";
    private string filePath = @"c:\stream\clip";

    // Start is called before the first frame update
    void Start()
    {
        player = GameObject.Find("Plane").GetComponent<VideoPlayer>();

        generateVideoNames();

        UnityInitializer.AttachToGameObject(this.gameObject);

        Amazon.AWSConfigs.HttpClient = Amazon.AWSConfigs.HttpClientOption.UnityWebRequest; // literally magic

        BeginButton.onClick.AddListener(() => { startPlaying(); });

        player.loopPointReached += EndReached;


    }

    void EndReached(VideoPlayer vp)
    {
        needNext = true;
    }

    #region private members

    private IAmazonS3 _s3Client;
    private AWSCredentials _credentials;



    private AWSCredentials Credentials
    {
        get
        {
            if (_credentials == null)
                _credentials = new CognitoAWSCredentials(IdentityPoolId, _CognitoIdentityRegion);
            return _credentials;
        }
    }

    private IAmazonS3 Client
    {
        get
        {
            if (_s3Client == null)
            {
                _s3Client = new AmazonS3Client(Credentials, _S3Region);
            }
            //test comment
            return _s3Client;
        }
    }

    #endregion

    private ulong frameCount = 0;


    private int startTime = 5;
    private Boolean loading = false;
    private Boolean once = false;
    // Update is called once per frame
    void Update()
    {
        if(Time.fixedTime < startTime){
            ButtonText.text = "Your Vysit will begin in " + Math.Ceiling(startTime - Time.fixedTime) + " seconds.";
        }

        if(!begun && !once && Time.fixedTime == startTime)
        {
            once = true;
            canvas.SetActive(false);
            getNextClip(vids[bufferPos - 1]);
        } else if(!begun && once && loadComplete)
        {
            begun = true;
            ResultText.text = "Playing clip " + bufferPos;
            player.url = filePath + bufferPos + filetype;
            player.Play();
            incBuffer();
        } else if (begun)
        {
            if(!loading && (ulong)player.frame > (player.frameCount - 15))
            {
                loading = true;
                getNextClip(vids[bufferPos - 1]);
            } else 
            if(loadComplete && player.frameCount >= (ulong)player.frame + 1)
            {
                loadComplete = false;
                ResultText.text = "Playing clip " + bufferPos;
                player.url = filePath + bufferPos + filetype;
                player.Play();
                System.IO.File.Delete(filePath + bufferLastLastPos + filetype);
                incBuffer();
            }





         /*   if (loadComplete)
            {
                player.Play();
                frameCount = player.frameCount;
                loadComplete = false;
            }*/
        }
    }



    public void startPlaying()
    {
        once = true;
        begun = true;
        // player.Play();
        ResultText.text = "Starting...\n";

        getNextFile();


    }


    private void incBuffer()
    {
        bufferLastLastPos = bufferLastPos; // truly, a masterstroke of programming
        bufferLastPos = bufferPos;
        if (bufferPos == bufferSize)
            bufferPos = 1; // TODO fix first file then remove this
        else
            bufferPos++;
    }

    public void getNextFile()
    {
        needNext = false;
        GetNextUrl(vids[bufferPos - 1], (path) =>
        {
            pathToNext = path;
        });



    }


    // credit to https://answers.unity.com/questions/1475285/download-and-save-file-from-amazon-s3.html
    public void getNextClip(string keyName)
    {
        Client.GetObjectAsync(s3BucketName, keyName, (responseObj) =>
        {
            var response = responseObj.Response;
            if (response.ResponseStream != null)
            {
                using (var fs = System.IO.File.Create(filePath + bufferPos + filetype))
                {
                    byte[] buffer = new byte[81920];
                    int count;
                    while ((count = response.ResponseStream.Read(buffer, 0, buffer.Length)) != 0)
                        fs.Write(buffer, 0, count);
                    fs.Flush();
                    fs.Close();
                    
                    loadComplete = true;
                    loading = false;
                    
                }
            }
        });



    }
    /// <summary>
    /// Returns a PreSignedURL
    /// </summary>
    /// <param name="key"></param>
    /// <param name="Url"></param>
    public void GetNextUrl(string key, Action<string> OnSuccessF = null)
    {
        Debug.Log("Next url for file " + key);
        GetPreSignedUrlRequest req = new GetPreSignedUrlRequest();
        req.Key = key;
        req.BucketName = s3BucketName;
        req.Expires = DateTime.Now.AddHours(6);


        // AmazonS3URI 


        ((AmazonS3Client)Client).GetPreSignedURLAsync(req, (resp) =>
        {
            if (resp.Exception == null)
            {
                OnSuccessF(resp.Response.Url);
            }
            else
            {
                Debug.Log("[GetUrl] GetPreSignedURLAsync failed with exception: " + resp.Exception.ToString());
            }

        }, new AsyncOptions() { ExecuteCallbackOnMainThread = true });
    }

    void generateVideoNames()
    {
        for (int i = 1; i <= bufferSize; i++)
        {
            vids[i - 1] = "/home/pi/" + i + filetype;
        }
    }
}
