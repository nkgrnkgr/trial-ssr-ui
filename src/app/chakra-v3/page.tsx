import { ClientComponent } from "./_components/client-component";
import { ServerComponent } from "./_components/server-component";

export default function ChakraV3Page() {
  return (
    <div>
      <h1>Chakra V3</h1>
      <ServerComponent />
      <ClientComponent />
    </div>
  );
}
