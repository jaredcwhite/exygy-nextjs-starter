import Header from '../components/header';

const layoutStyle = {
  border: '1px solid #DDD'
};

const Layout = props => (
  <>
    <Header />
    <main style={layoutStyle}>
      {props.children}
    </main>
  </>
);

export default Layout;