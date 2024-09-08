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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalendarIcon,
  ColorWheelIcon,
  DotsHorizontalIcon,
  DotsVerticalIcon,
  DropdownMenuIcon,
  MoveIcon,
  ThickArrowDownIcon,
  ThickArrowUpIcon,
} from "@radix-ui/react-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible } from "@/components/ui/collapsible";
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { addDays, format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import LoginForm from "@/components/forms/LoginForm";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type MockContent = {
  id: string;
  title: string;
  description: string;
};

type Option = { name: string };

function App() {
  const [mockContent, setMockContent] = useState<MockContent[]>([
    {
      id: "1",
      title: "MJ The GOAT",
      description: "Michael jordan twerked off vs lebron james",
    },
    {
      id: "2",
      title: "GTX 1650",
      description:
        "They said that GTX 1650 is an outdated GPU, but in my opinion it's not.",
    },
    {
      id: "3",
      title: "shadcn/ui",
      description:
        "Shad CN is just sooo good, it saves me from pain on designing",
    },
  ]);

  const [options, _] = useState<Option[]>([
    {
      name: "Refresh",
    },
    {
      name: "Settings",
    },
    {
      name: "Send Feedback",
    },
    {
      name: "Help",
    },
    {
      name: "Signout",
    },
  ]);

  const [date, setDate] = useState<Date | undefined>();
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

      <div className="flex items-center justify-center">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {mockContent.map((content) => (
              <CarouselItem key={content.id}>
                <Card className="p-4">
                  <CardContent className="p-0 flex flex-col min-h-44">
                    <CardTitle className="mb-2 text-lg">
                      {content.title}
                    </CardTitle>
                    <CardDescription>{content.description}</CardDescription>
                    <CardFooter className="justify-end p-0 mt-auto">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button>Delete</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogTitle>
                            Do you want to delete this content?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone
                          </AlertDialogDescription>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => {
                                setMockContent((mockContent) =>
                                  mockContent.filter((c) => c.id !== content.id)
                                );
                              }}
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </CardFooter>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <Checkbox onCheckedChange={(e) => console.log(e.valueOf())} />

      <Collapsible>
        <div className="flex items-center gap-2">
          <h1>/mark-ianz Top Repositories</h1>
          <CollapsibleTrigger asChild>
            <DropdownMenuIcon className="cursor-pointer w-6 h-6" />
          </CollapsibleTrigger>
        </div>

        <div className="border p-4 rounded-md w-40">cuisinatin</div>

        <CollapsibleContent className="flex gap-2 flex-col mt-2">
          <div className="border p-4 rounded-md w-40">lib_sys</div>
          <div className="border p-4 rounded-md w-40">fitracker</div>
        </CollapsibleContent>
      </Collapsible>

      <ContextMenu>
        <ContextMenuTrigger className="w-fit border border-dashed rounded-md p-4 text-gray-500">
          Right Click Me!
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={() => console.log("Friend request sent!")}>
            Add Friend
          </ContextMenuItem>
          <ContextMenuItem
            onClick={() => console.log("Routing to /profile/user...")}
          >
            View Profile
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Posts</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem
                onClick={() => console.log("visiting /cuisinatin")}
              >
                cuisinatin
              </ContextMenuItem>
              <ContextMenuItem
                onClick={() => console.log("visiting /fitracker")}
              >
                fitracker
              </ContextMenuItem>
              <ContextMenuItem onClick={() => console.log("visiting /lib_sys")}>
                lib_sys
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuItem onClick={() => console.log("User blocked")}>
            Block
          </ContextMenuItem>
          <ContextMenuItem onClick={() => console.log("User reported")}>
            Report
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      <div className="flex items-center justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="justify-start gap-2">
              <CalendarIcon />
              <p>{date ? format(date, "PPP") : "Birthdate"}</p>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Calendar mode="single" onSelect={setDate} selected={date} />
          </PopoverContent>
        </Popover>
      </div>

      <Dialog>
        <div className="flex items-center justify-center">
          <DialogTrigger asChild>
            <Button>Yow</Button>
          </DialogTrigger>
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>Join us now</DialogDescription>
          </DialogHeader>
          <DialogFooter>Footer</DialogFooter>
        </DialogContent>
      </Dialog>

      <DropdownMenu>
        <div>
          <DropdownMenuTrigger asChild>
            <DotsVerticalIcon className="w-6 h-6" />
          </DropdownMenuTrigger>
        </div>
        <DropdownMenuContent
          className="rounded-md p-4 w-56 text-sm"
          align="start"
        >
          {options.map((option: Option, index: number) => (
            <DropdownMenuItem
              key={index}
              className="p-2 rounded-md hover:bg-neutral-100 outline-none"
            >
              <p>{option.name}</p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant={"link"}>@kaisotto69</Button>
        </HoverCardTrigger>
        <HoverCardContent className="flex gap-2 text-sm">
          <Avatar>
            <AvatarImage src={kai_sotto_goat} />
          </Avatar>
          <div>
            <p className="font-semibold">Kai Sotto</p>
            <p className="font-thinner">
              He is the greatest basketball player of all time. Filipino pride
              #1 GOAT
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

export default App;

// Skipped:
// Chart
// Combo Box
// Command
// Data table
// Form
