import Button from "../ui/button";
import Card from "../ui/dashboard/card";
import TextField from "../ui/dashboard/text-field";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <TextField
        id="filter"
        type="text"
        placeholder="Long url"
      />
      <div className="flex justify-center">
        <Button className="bg-cyan-900">
          Create a link
        </Button>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card
          url={"www.google.com"}
          shortUrl={"xyiuasd"}
          description={"my side"}
        />
      </div>
    </div>
  )
}
