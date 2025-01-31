import { FC, useEffect, useState } from 'react';

interface AnnouncementsProps {
  sheetId: string;
  apiKey: string;
  range?: string; // default "Sheet1!A:A"
}

const Announcements: FC<AnnouncementsProps> = ({
  sheetId,
  apiKey,
  range = 'Sheet1!A:A'
}) => {
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(
      range
    )}?key=${apiKey}`;

    fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `Error fetching sheet data: ${response.status} ${errorText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.values) {
          // parse each row's first column (row[0]) as an announcement string
          const parsed = data.values.map((row: string[]) => row[0]);
          setAnnouncements(parsed);
        } else {
          setAnnouncements([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [sheetId, apiKey, range]);

  if (loading) {
    return <div>Loading announcements...</div>;
  }
  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {announcements.length === 0 ? (
        <p>No announcements found.</p>
      ) : (
        // Render each announcement as its own blockquote
        <>
          {announcements.map((announcement, index) => (
            <blockquote
              key={index}
              className="border-l-4 border-blue-400 pl-4 my-4"
            >
              {announcement}
            </blockquote>
          ))}
        </>
      )}
    </div>
  );
};

export default Announcements;
