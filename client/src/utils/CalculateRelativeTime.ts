import moment from "moment";

export default function getRelativeTime(d1: Date) {
  return moment(d1).fromNow();
}
