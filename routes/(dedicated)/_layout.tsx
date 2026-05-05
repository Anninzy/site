import { define } from "@/utils.ts";
import Mobile from "./(_components)/mobile/_layout.tsx";
import Desktop from "./(_components)/desktop/_layout.tsx";

export default define.layout((props) => {
  if (props.state.mobile === true) {
    return <Mobile {...props} />;
  }

  return <Desktop {...props} />;
});
