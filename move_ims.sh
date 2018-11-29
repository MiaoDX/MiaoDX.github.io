for d in $(find ./source/_posts/blogs -maxdepth 2 -type d)
do
	#Do something, the directory is accessible with $d:
	bn=$(basename $d)
	if [ $bn = pics ]
	then echo $d
		for f in $(find $(dirname $d) -maxdepth 2 -type f -name '*.md')
		do
			echo $f
			f_d="${f%.*}"
			mkdir -p $f_d
			cp $d $f_d -r
			echo $f_d
		done
	fi
done