# Deploy AWS
1. Project build
    1. Generated folder should be copied to cloud server
1. S3
    1. Create a bucket with a valid URL
    1. Disable options to permit public access to files
    1. Drop or upload build files to bucket
    1. Grant public read access to this objects
    1. Properties tab > static website hosting
    1. Use this bucket to host a website
    1. index and error document are index.html
1. DNS
    1. associate aws url with your dns
