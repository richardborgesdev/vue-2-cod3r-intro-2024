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
1. Certificado SSL
    1. aws > certified manager
    1. provision certificate
    1. create a public certificate
    1. fill with you public domain
    1. dns validation
    1. add aws entry in your url domain manager > CNAME
1. CloudFront
    1. create distribution
    1. web distribution
    1. alternative domain names > CNAME
    1. ssl certificate
    1. default root object > index.html
    1. **bucket name should have the same name as the public url**
    1. associate cloudfront register with you domain register manager
