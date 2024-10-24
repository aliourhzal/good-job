import LittleDescription from "./ui/LittleDescription";
import SectionWrapper from "./ui/SectionWrapper";
import ValueCard from "./ui/ValueCard";

export default function About() {
  return (
    <SectionWrapper className="">
      <LittleDescription>about</LittleDescription>
      <h2 className="text-dark-blue font-bold text-[32px] mb-8">
        Good Job is the platform connecting <br />
        <span className="text-text-orange">
          people with Handymen / Technicians
        </span>
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 ">
        <ValueCard title="Reliability">
          Our platform connects you with skilled, background-checked handymen
          and technicians, ensuring high-quality service every time. We
          carefully vet all providers, so you can feel confident about who
          you’re hiring.
          <br />
          <br /> We prioritize consistency and professionalism. Every service
          provider is committed to delivering reliable and efficient solutions,
          ensuring your tasks are completed to the highest standards.
          <br />
          <br />
          Our professionals respect your time, arriving as scheduled and
          maintaining clear communication, so you’re never left guessing.
        </ValueCard>
        <ValueCard title="Transparency">
          No hidden fees, no surprises. We offer clear, upfront quotes so you
          know exactly what you’re paying for before you book.
          <br />
          <br />
          Each service listing provides detailed descriptions, expected
          timeframes, and requirements, so you can make informed decisions about
          your needs.
          <br />
          <br />
          Read genuine feedback from previous customers to help you choose the
          right professional for the job. We promote transparency to build trust
          and accountability.
        </ValueCard>
        <ValueCard title="Convenience">
          Finding and booking a handyman or technician has never been simpler.
          With a few clicks, you can compare services, check availability, and
          make a reservation without any hassle.
          <br />
          <br />
          Pay securely through various methods, including online payments,
          credit cards, and digital wallets, for a smooth and seamless
          transaction.
          <br />
          <br />
          We understand plans can change. That’s why we offer easy options to
          schedule, reschedule, or cancel appointments, giving you the
          flexibility to book when it’s convenient for you.
        </ValueCard>
      </div>
    </SectionWrapper>
  );
}
