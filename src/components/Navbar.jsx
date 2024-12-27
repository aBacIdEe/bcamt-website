import React from "react";
import { Outlet, Link } from "react-router-dom";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  const navList = (
    <ul className="flex flex-row justify-end gap-6 lg:items-center">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/about" className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/programs" className="flex items-center">
          Programs
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/history" className="flex items-center">
          History
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/resources" className="flex items-center">
          Resources
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="mx-auto w-full max-w-7xl">
      <Navbar className="sticky z-10 h-max max-w-full rounded-none px-0 py-4 border-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex-1">
            <Typography
              as="a"
              href="#"
              className="cursor-pointer py-1.5 font-medium"
            >
              BCA Math Team
            </Typography>
          </div>
          <div className="flex-1 items-center">{navList}</div>
        </div>
      </Navbar>
    </div>
  );
}
