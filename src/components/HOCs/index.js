import { UserContext } from '../../contexts';

export function withUser (WrappedComponent) {
  function WrappedComponentWithUser (props) {
    return (
      <UserContext.Consumer>
        {user => {
          return <WrappedComponent user={user} {...props} />;
        }}
      </UserContext.Consumer>
    );
  }
  return WrappedComponentWithUser;
}
