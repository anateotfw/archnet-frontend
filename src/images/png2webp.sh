numberOfJpgs=$(ls *.jpg | wc -l)

  for i in $(seq 1 $numberOfJpgs); do
    jpgFilename=$(ls *.jpg | head -n $i | tail -n 1)
    originalFilename=$jpgFilename
    webpFilename=${jpgFilename%.*}.webp
    echo "Converting $originalFilename to $webpFilename"
    magick convert $originalFilename $webpFilename
    echo "Deleting $originalFilename"
    rm $originalFilename
  done
