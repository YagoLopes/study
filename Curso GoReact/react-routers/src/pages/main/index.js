import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as FavoriteActions from "../../store/actions/favorites";
function main({ addFavorite, favorites }) {
  /*  PropTypes = {
    addFavorite: PropTypes.func.isRequired,
    favorite: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string
      })
    ).isRequired
  };
*/
  const [setRepoInput, repoInput] = useState("");

  function handleAddRepository(e) {
    e.preventDefault();
    addFavorite();
  }

  return (
    <>
      <form onSubmit={handleAddRepository}>
        <input
          placeholder="usuário/repositório"
          value={repoInput}
          onChange={e => setRepoInput(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.id}>
            <p>
              <strong>{favorite.name}</strong>({favorite.description})
            </p>
            <a href={favorite.url}>Acessar</a>
          </li>
        ))}
      </ul>
    </>
  );
}
const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(main);
