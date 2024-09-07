import { useState } from "react";
import { Button } from "./components/ui/button";
import "./index.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>hello</p>
      <Button variant={"destructive"}>hlo</Button>
      <Accordion type="single" collapsible>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default App;
