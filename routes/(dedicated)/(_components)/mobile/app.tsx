import { define } from "@/utils.ts";
import Folder from "@/components/Folder.tsx";

export default define.page(() => {
  return (
    <div className="carousel aspect-square w-full carousel-center space-x-4 [view-transition-name:App] *:carousel-item">
      <Folder>
        <div class="bg-ctp-teal" />
        <div class="bg-ctp-sky" />
        <div class="bg-ctp-lavender" />
        <div class="bg-ctp-mauve" />
      </Folder>
      <Folder>
        <div class="bg-ctp-teal" />
        <div class="bg-ctp-sky" />
        <div class="bg-ctp-lavender" />
        <div class="bg-ctp-mauve" />
      </Folder>
      <Folder>
        <div class="bg-ctp-teal" />
        <div class="bg-ctp-sky" />
        <div class="bg-ctp-lavender" />
        <div class="bg-ctp-mauve" />
      </Folder>
    </div>
  );
});
