import React from "react";
import Container from "./../ui/Container/Index";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Results = () => {
  return (
    <Container
      className={
        "flex my-20 flex-col items-stretch gap-14 pr-20 relative lg:grid lg:grid-cols-4"
      }
      id="features"
    >
      <Result
        count={<Counter end={23000000} />}
        title="Miles per year"
        progress={"w-full"}
      />
      <Result
        count={<Counter end={500000} />}
        title="Tons of annual delivered goods"
        progress={"w-2/3"}
      />
      <Result
        count={<Counter end={36000} />}
        title="Delivered loads per year"
        progress={"w-2/5"}
      />
      <Result
        count={<Counter end={4000} />}
        title="Happy customers"
        progress={"w-1/4"}
      />
      <div className="w-60 h-60 bg-orange rounded-md absolute bottom-32 rotate-45 -right-48 lg:hidden"></div>
    </Container>
  );
};

function Counter({ end }) {
  return (
    <CountUp end={end} redraw={true}>
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
        </VisibilitySensor>
      )}
    </CountUp>
  );
}

export default Results;

function Result({ title, count, progress }) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-orange font-[Gilroy] font-bold text-[40px]">
        {count}+
      </h1>
      <p className="text-[25px]">{title}</p>
      <div className="w-full h-1 mt-auto rounded border-[#DADADA] border flex items-center">
        <div className={`bg-orange ${progress} h-1 rounded`}></div>
      </div>
    </div>
  );
}
