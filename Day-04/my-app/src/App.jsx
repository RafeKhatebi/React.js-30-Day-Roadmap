import ProfileCard from './ProfileCard';
import myphoto1 from './assets/img/5.webp'
import myphoto2 from './assets/img/6.webp'

function App() {
  return (
    <div>
      <ProfileCard
      imageUrl={myphoto1}
        name="Samira Ghaffari"
        bio="Front-end developer, React learner, book lover."

      />
      <ProfileCard
      imageUrl={myphoto2}
        name="Kamran Hosseini"
        bio="Full-stack engineer, cyclist, coffee fan."

      />
    </div>
  );
}

export default App;
