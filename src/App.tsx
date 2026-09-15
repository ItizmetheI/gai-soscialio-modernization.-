import { Hero } from './components/Hero';
import { DeviceSequence } from './components/DeviceSequence';
import { DigitalWorld } from './components/DigitalWorld';

export default function App() {
  return (
    <main className="relative w-full bg-stone-50 selection:bg-[#E55C3A] selection:text-white">
      <Hero />
      <DeviceSequence />
      <DigitalWorld />
    </main>
  );
}
