from subprocess import getoutput
import re

# Check the versions written in json files.
srcVer = getoutput('npm run checkVersion')

for line in srcVer.split('\n'):
  matchResult =re.match(r'^.+\.json.*$', line)
  if (matchResult is not None and len(matchResult.group()) > 0):
    print(line)

# Display the latest git tag.
allTag = getoutput('git tag').split('\n')
print("Latest release: " + allTag[len(allTag) - 1])
