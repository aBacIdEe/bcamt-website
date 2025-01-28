import React, { FC, useEffect, useState } from 'react';

interface AnnouncementsProps {
  sheetId: string;    // e.g. "1AbCDEf12345xyz6789"
  apiKey: string;     // Your Google Sheets API key
  range?: string;     // Optional. Default "Sheet1!A:A"
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
    // Construct the request URL
    // Example: https://sheets.googleapis.com/v4/spreadsheets/<sheetId>/values/Sheet1!A:A?key=<apiKey>
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
        // data.values is usually an array of arrays, e.g. [ ["First announcement"], ["Second announcement"], ... ]
        // We'll parse each row's first column (row[0]) into a string.
        if (data && data.values) {
          // If there's a header row you want to skip, you can shift() it off
          // data.values.shift();

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
      <h2 className="text-xl font-bold mb-4">Announcements</h2>
      {announcements.length === 0 ? (
        <p>No announcements found.</p>
      ) : (
        <ul className="list-disc list-inside space-y-2">
          {announcements.map((announcement, index) => (
            <li key={index} className="leading-relaxed">
              {announcement}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Announcements;
