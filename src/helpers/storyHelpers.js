import moment from "moment";
const butonLabel = (
  user,
  story,
  localIsDev,
  localIsConclusion,
  localIsFinished
) => {
  if (!user) {
    return "Read";
  } else if (
    user === story?.intro?.author ||
    user === story?.development?.author ||
    user === story?.conclusion?.author
  ) {
    return "Read";
  } else if (localIsDev) {
    return "Write development";
  } else if (localIsConclusion) {
    return "Write conclusion";
  } else if (localIsFinished) {
    return "Read";
  }
};

const getLink = (story, post, user, hrefLink) => {
  const author =
    story?.intro?.author ||
    story?.development?.author ||
    story?.conclusion?.author;
  const shouldRedirect = author === user;

  if (shouldRedirect) {
    return `/story/${post._id}`;
  } else if (user) {
    return hrefLink;
  }
};
const calculateRelativeTime = (createdAt) => {
  const now = moment();
  const created = moment(createdAt);
  const diffMinutes = now.diff(created, "minutes");
  const diffHours = now.diff(created, "hours");
  const diffDays = now.diff(created, "days");

  if (diffMinutes < 60) {
    return `Created ${diffMinutes} minutes ago`;
  } else if (diffHours < 24) {
    return `Created ${diffHours} hours ago`;
  } else {
    return `Created ${diffDays} days ago`;
  }
};

export { butonLabel, getLink, calculateRelativeTime };
