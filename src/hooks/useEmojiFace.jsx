export default function useEmojiFace(formatState) {
  if (formatState === "Select an export format") {
    return false;
  }
  return true;
}
