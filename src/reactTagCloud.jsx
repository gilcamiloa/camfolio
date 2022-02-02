import TagCloud from 'TagCloud'


// Create the tag cloud using the skillList
// Set the tag cloud width to 90%
export default function tagCloud() {
  const skillList = [
    "PHP", "jQuery", "NPM",
    "Linux", "EJS", "MongoDB", "REST",
    "SQL", "Android", "Express"
  ];

  const settings = {
    // TagCloud: https://github.com/mcc108/TagCloud
    radius: 100,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true
  }
  return(
    TagCloud(".sphere", skillList, settings)
  );
}
