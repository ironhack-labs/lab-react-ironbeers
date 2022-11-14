import SportsBarIcon from '@mui/icons-material/SportsBar';

const logoStyle = { display: 'flex', flexDirection: 'row', margin: '20px 20px 40px' };
const againStyle = { fontSize: '20px', position: 'absolute', top: '32px', right: '0' };

function Logo() {
  return (
    <div style={logoStyle}>
      <SportsBarIcon sx={{ fontSize: '42px' }} />
      <div style={{ position: 'relative' }}>
        <h1 style={{ margin: '0' }}>Ironbeers</h1>
        <p style={againStyle}>again... -.-</p>
      </div>
    </div>
  );
}
export default Logo;
