import { define } from "@/utils.ts";
import Mobile from "./(_components)/mobile/index.tsx";
import Desktop from "./(_components)/desktop/index.tsx";

export default define.page((props) => {
  if (props.state.mobile === true) {
    return <Mobile {...props} />;
  }

  return <Desktop {...props} />;
});
