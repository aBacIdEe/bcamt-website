import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function AnnouncementCard( {text, link, linkText} ) {
    return (
      <Card className="m-3" color="blue-gray">
        <CardBody>
          <Typography>
            {text}
          </Typography>
          <a href={link}>{linkText}</a>
        </CardBody>
      </Card>
    );
  }