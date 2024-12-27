import { AnnouncementCard } from "./AnnouncementCard";

export function Announcements() {
    const announcements = [
        {
            text: "The 13th annual JHMMC (for students in 8th grade or below) will take place Sunday, October 20th, 2024.",
            link: "https://register.capturepoint.com/reg/cat_program_list_detail.cfm?season_id=23385&program_id=2377159",
            linkText: "Register here",
            expirationDate: "2024-10-20",
            id: "2024-10-20-1", // Unique and static identifier (Overkill to do a hashing function, so just base it off of date and an index) alternatively, we could start a database and use UUIDs
        },
    ];

    function renderAnnouncement(text, link, linkText, expirationDate, id) {
        if (Date.now() < new Date(expirationDate)) {
            return (
                <div key={id}>
                    <AnnouncementCard
                        text={text}
                        link={link}
                        linkText={linkText}
                    />
                </div>
            );
        }
    }

    const announcementList = announcements.map((announcement) =>
        renderAnnouncement(
            announcement.text,
            announcement.link,
            announcement.linkText,
            announcement.expirationDate,
            announcement.id
        )
    );

    return <>{announcementList}</>;
}
