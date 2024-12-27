export function AnnouncementCard({ text, link, linkText, expirationDate }) {
  return (
    <Card className="m-3" color="blue-gray">
      <CardBody>
        <Typography>{text}</Typography>
        <a href={link}>{linkText}</a>
      </CardBody>
    </Card>
  );
}
