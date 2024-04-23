import ParticlesBg from 'particles-bg';

const ParticleBg = () => {
  const path = '/';
  return (
    <ParticlesBg
      color={path === '/' ? '#C2021D' : '#375bec'}
      num={75}
      type="cobweb"
      bg={true}
    />
  );
};

export default ParticleBg;
