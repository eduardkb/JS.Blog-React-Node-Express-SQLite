import React from "react";
import PostsPannel from "./PostsPannel";
import FilterPannel from "./FilterPannel";

const MainPannel = () =>{
	return(
		<div>
			<FilterPannel />
			<PostsPannel />
		</div>
	);
};

export default MainPannel;