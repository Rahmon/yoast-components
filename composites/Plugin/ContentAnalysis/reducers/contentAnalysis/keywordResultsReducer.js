import { UPDATE_SEO_RESULT, SET_SEO_RESULTS, REMOVE_KEYWORD, SET_SEO_RESULTS_FOR_KEYWORD } from "../../actions/contentAnalysis";
import findIndex from "lodash/findIndex";
import omit from "lodash/omit";

/**
 * Initial state
 */
const initialState = {};

/**
 * Helper functions
 */

/**
 * Replaces a result when there already is a result with the given id.
 *
 * @param {Object} state The state.
 * @param {Object} action The action.
 *
 * @returns {Object} The new results.
 */
function replaceResult( state, action ) {
	const newResults = Array.from( state[ action.keyword ], ( result ) => {
		if( result.id === action.result.id ) {
			return action.result;
		}
		return result;
	} );
	return Object.assign( {}, state, {
		[ action.keyword ]: newResults,
	} );
}

/**
 * Sets results for a new keyword.
 *
 * @param {Object} state The state.
 * @param {Object} keyword The keyword.
 * @param {Array} results The SEO analysis results.
 *
 * @returns {Object} The new results.
 */
function setResultsForNewKeyword( state, keyword, results ) {
	return Object.assign( {}, state, {
		[ keyword ]: results,
	} );
}

/**
 * Updates a SEO result. Adds a keyword if it doesn't exist yet and updates it otherwise.
 *
 * @param {Object} state The state.
 * @param {Object} action The action.
 *
 * @returns {Object} The updated results.
 */
function updateSeoResult( state, action ) {
	if( ! state[ action.keyword ] ) {
		return setResultsForNewKeyword( state, action.keyword, [ action.result ] );
	}

	let resultIndex = findIndex( state[ action.keyword ], { id: action.result.id } );
	if( resultIndex !== -1 ) {
		return replaceResult( state, action );
	}

	return Object.assign( {}, state, {
		[ action.keyword ]: [ ...state[ action.keyword ], action.result ],
	} );
}

/**
 * Updates all SEO results for a keyword. Adds a keyword if it doesn't exist yet and updates it otherwise.
 *
 * @param {Object} state The state.
 * @param {Object} action The action.
 *
 * @returns {Object} The updated results.
 */
function updateSeoResultsForKeyword( state, action ) {
	if( ! state[ action.keyword ] ) {
		return setResultsForNewKeyword( state, action.keyword, action.results );
	}

	return Object.assign( {}, state, {
		[ action.keyword ]: action.results,
	} );
}

/**
 * Sets the SEO results for one of more keywords.
 *
 * @param {string} action The action.
 * @returns {Object} The SEO results per keyword.
 */
function setSeoResults( action ) {
	let resultsPerKeyword = {};
	action.resultsPerKeyword.forEach( function( keywordResultsPair ) {
		resultsPerKeyword[ keywordResultsPair.keyword ] = keywordResultsPair.results;
	} );
	return resultsPerKeyword;
}

/**
 * Reducers
 */

/**
 * A reducer for the keyword results object.
 *
 * @param {Object} state The current state of the object.
 * @param {Object} action The current action received.
 * @returns {Object} The updated keywords results object.
 */
export function keywordResultsReducer( state = initialState, action ) {
	switch ( action.type ) {
		case SET_SEO_RESULTS:
			return setSeoResults( action );
		case UPDATE_SEO_RESULT:
			return updateSeoResult( state, action );
		case REMOVE_KEYWORD:
			return omit( state, action.keyword );
		case SET_SEO_RESULTS_FOR_KEYWORD:
			return updateSeoResultsForKeyword( state, action );
		default:
			return state;
	}
}
