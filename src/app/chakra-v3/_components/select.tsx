import { For, Heading, Stack, createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../../../components/ui/select";

export function Select() {
  const frameworks = createListCollection({
    items: [
      { label: "React.js", value: "react" },
      { label: "Vue.js", value: "vue" },
      { label: "Angular", value: "angular" },
      { label: "Svelte", value: "svelte" },
    ],
  });
  return (
    <Stack m="2" gap="5" width="320px">
      <SelectRoot collection={frameworks}>
        <SelectLabel>FrameWorks</SelectLabel>
        <SelectTrigger>
          <SelectValueText placeholder="Select movie" />
        </SelectTrigger>
        <SelectContent>
          {frameworks.items.map((movie) => (
            <SelectItem item={movie} key={movie.value}>
              {movie.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </Stack>
  );
}
