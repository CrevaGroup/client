import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const TestimonialCard = () => {
  return (
    <div className="w-full max-w-[28rem] mx-auto ">
      <Card
        color="transparent"
        shadow={true}
        className="bg-white flex dark:bg-[#C3A3D0] w-full"
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-4 sm:mx-8 md:mx-10 flex items-center flex-col sm:flex-row gap-4 pt-4 pb-2"
        >
          <Avatar
            style={{ borderRadius: "100%", width: "100px", marginTop: "0" }}
            size="lg"
            variant="circular"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="tania andrew"
          />
          <div className="flex flex-col w-full sm:w-auto gap-2 dark:text-white">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                Tania Andrew
              </Typography>
              <div className="flex items-center space-x-1 sm:space-x-2 p-2 mb-2 sm:mb-0">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <Typography color="blue-gray">Frontend Lead @ Google</Typography>
          </div>
        </CardHeader>
        <CardBody className="mb-4 sm:mb-6 p-4 sm:p-10 dark:text-gray-100">
          <Typography>
            &quot;I found a solution to all my design needs from Creative Tim. I
            use them as a freelancer in my hobby projects for fun! And it's
            really affordable, very humble guys !!!&quot;
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default TestimonialCard;
