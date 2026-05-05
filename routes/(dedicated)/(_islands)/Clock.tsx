import { useSignal } from "@preact/signals";
import { dateFormat, timeFormat } from "./time.ts";

function getDateTime() {
  return `${dateFormat.format()} ${timeFormat.format()}`;
}

function getTime() {
  return timeFormat.format();
}

interface ClockProps {
  mobile: boolean;
}

export default function ({ mobile }: ClockProps) {
  const getTimeString = mobile ? getTime : getDateTime;
  const time = useSignal(getTimeString());

  setInterval(function () {
    time.value = getTimeString();
  }, 1000);

  return time;
}
