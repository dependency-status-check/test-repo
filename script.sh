# #!/bin/sh

# file="fix:Updated readme and sample php"
# word1="fix"
# word2="feat"


# cmd=$(grep -ci "$word1" $file)

# if [ "$cmd" != "0" ]; then
#         echo "Word exists"
# else
#         echo "Word does not exist."
# fi




#!/bin/bash
 
str="fix: modifiled changes to shell script"

if [[ $str = *fix* ]]; then
  echo "Yes"
elif [[ $str = *feat* ]]; then
  echo "of course"
else 
  echo "none"
fi



# if grep -Fxq ".npmrc" .gitignore
# then
#   echo "no action is required"
# else
#   echo '.npmrc' >> .gitignore
# fi