const useDetermineSection = (story) => {
  const localIsFinished =
    story && story.intro && story.development && story.conclusion;
  const localIsDev = story && story.intro && !story.development;
  const localIsConclusion =
    story && story.intro && story.development && !story.conclusion;
  const hrefLink = `/${localIsFinished ? "story" : "add"}/${story._id}`;

  return { localIsFinished, localIsDev, localIsConclusion, hrefLink };
};
export { useDetermineSection };
