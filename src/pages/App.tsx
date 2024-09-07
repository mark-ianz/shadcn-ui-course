import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../components/ui/button";
import { AspectRatio } from "../components/ui/aspect-ratio";
import kai_sotto_goat from "../assets/kai_sotto_goat.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { subDays } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MoveIcon,
  ThickArrowDownIcon,
  ThickArrowUpIcon,
} from "@radix-ui/react-icons";

function App() {
  const [date, setDate] = useState<Date>(subDays(new Date(), 1));

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-lg">Accordion Test</h1>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Lorem, ipsum.</AccordionTrigger>
          <AccordionContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            magni.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Lorem, ipsum dolor.</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            placeat maxime fugiat corporis laborum doloremque nesciunt?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Lorem ipsum dolor sit.</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste
            iure repudiandae nam nesciunt autem perferendis eum est fugit saepe?
            Doloribus suscipit totam nihil quam explicabo fuga ullam velit
            repellat?
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Alert>
        <AlertTitle>Hello!</AlertTitle>
        <AlertDescription>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </AlertDescription>
      </Alert>
      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Open</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Do you want to unfuck your brain?
              </AlertDialogTitle>
              <AlertDialogDescription>
                If your brain is fucked, unfuck it. Unfucking your brain cannot
                be undone
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel>No way</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => console.log("Brain successfully unfucked.")}
              >
                Unfuck my brain
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>

          <AlertDialogOverlay className="bg-black opacity-35"></AlertDialogOverlay>
        </AlertDialog>
      </div>
      <AspectRatio ratio={16 / 9}>
        <img src={kai_sotto_goat} alt="Kai Sotto The Goat" />
      </AspectRatio>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={kai_sotto_goat} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <Badge variant={"secondary"}>Admin</Badge>
      </div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={"home"}>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={"about"}>About</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Testing</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div>
        <Button>Hello</Button>
      </div>
      <Calendar mode="single" className="border w-fit rounded-md" />

      <Card>
        <CardHeader>
          <CardTitle>Push Day</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
            perspiciatis?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src={kai_sotto_goat}
            alt="KAI SOTTO MY GOAT"
            className="w-full h-96 object-contain bg-black bg-opacity-10"
          />
        </CardContent>
        <CardFooter className="gap-4">
          <ThickArrowUpIcon className="w-6 h-6" />
          <ThickArrowDownIcon className="w-6 h-6" />
          <MoveIcon className="w-6 h-6" />
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
