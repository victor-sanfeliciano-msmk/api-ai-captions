# Alt Image Generator

This project will generate relevant alt text for images using AI.

![Alt Image Generator](ogimage.png)

## How it works

It uses an ML modal from Salesforce called [BLIP](https://github.com/salesforce/BLIP) on [Replicate](https://replicate.com/) to generate relevant alt text for images. You can feed the Next.js API route an image as a query param and it will return a one sentence description of that image.
