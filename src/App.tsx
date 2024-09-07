import "./index.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
