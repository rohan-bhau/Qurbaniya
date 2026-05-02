 'use client'
import { Label, ListBox, Select } from "@heroui/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Sorting = () => {
    const router = useRouter()
    const pathName = usePathname();
    const searchParams = useSearchParams()

    const handleSort = (value) => {
        console.log(value)
        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        console.log(params)
        console.log(params.toString())
        router.push(`${pathName}?${params.toString()}`,{scroll: false})
    }
  return (
    <Select className="w-[256px]" placeholder="Select one">
      <Label>Sort</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item
            id="low-to-high"
            textValue="low-to-high"
            onPress={() => handleSort("low-to-high")}
          >
            Low to High
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item
            id="high-to-low"
            textValue="high-to-low"
            onPress={() => handleSort("high-to-low")}
          >
            High to Low
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
    </Select>
  );
}

export default Sorting
