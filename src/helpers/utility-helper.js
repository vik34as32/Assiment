export const updateObject = (oldState, updatedProperties) => {
	return {
		...oldState,
		...updatedProperties
	};
}

export const compareString = (first,second) => {
	return first === second ? true : false;
};
