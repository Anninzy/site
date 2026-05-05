import { define } from "@/utils.ts";
import Mobile from "./(_components)/mobile/app.tsx";
import Desktop from "./(_components)/desktop/app.tsx";

export default define.page((props) => {
  if (props.state.mobile === true) {
    return <Mobile {...props} />;
  }

  return <Desktop {...props} />;
});
