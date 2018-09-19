import { connect } from 'react-redux';
import Matches from '../components/Matches';

const mapStateToProps = ({matches}) => ({matches});

export default connect(mapStateToProps)(Matches);
