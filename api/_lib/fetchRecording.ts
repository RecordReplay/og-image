import fetch from "cross-fetch";

export default async function fetchRecording(id: string) {
  const resp = await fetch(process.env.NEXT_PUBLIC_API_SERVER!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query GetRecording($recordingId: UUID!) {
          recording(uuid: $recordingId) {
            title
            createdAt
            private
            isInitialized
            thumbnail
            owner {
              name
            }
          }
        }
      `,
      variables: {
        recordingId: id,
      },
    }),
  });

  const json: {
    data: any;
    error: any;
  } = await resp.json();

  if (json.error || !json.data.recording || json.data.recording.private || !json.data.recording.isInitialized) {
    throw new Error("Failed to fetch recording: " + id);
  }

  return {
    title: json.data.recording.title as string,
    date: new Intl.DateTimeFormat("en-us").format(new Date(json.data.recording.createdAt)),
    thumbnail: json.data.recording.thumbnail as string,
    user: json.data.recording.owner?.name as string,
  };
}
