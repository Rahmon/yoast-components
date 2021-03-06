import React from "react";
import styled from "styled-components";

import Collapsible from "../composites/Plugin/Shared/components/Collapsible";

export const SortableContainer = styled.div`
    min-width: 255px;
    width: 280px;
    min-height: 250px;
    position: fixed;
    top: 56px;
    right: 20px;
    box-sizing: border-box;
`;

export const WidgetContainer = styled.div`
    position: relative;
    margin-bottom: 20px;
    padding: 0;
    line-height: 1;
    border: 1px solid #e5e5e5;
    background: white;
    box-shadow: 0 1px 1px rgba(0,0,0,.04);
`;

/**
 * Returns the SidebarCollapsibleWrapper component.
 *
 * @returns {ReactElement} The SidebarCollapsibleWrapper component.
 */
export default function SidebarCollapsibleWrapper() {
	return (
		<SortableContainer>
			<WidgetContainer>
				<Collapsible
					title="Insert some collapsible title here"
					titleScreenReaderText="bad SEO score"
					initialIsOpen={ true }
					prefixIcon="circle"
					prefixIconCollapsed="circle"
					prefixIconColor="red"
				>
					<h4>Some content</h4>
					<p>With some text under it of course. Otherwise this would not make much sense, right?</p>
					<h4>Some other content</h4>
					<p>I should start using lorem ipsum here to write my material.</p>
				</Collapsible>
				<Collapsible
					title="Collapsible initially closed"
					initialIsOpen={ false }
				>
					<h4>Some content</h4>
					<p>With some text under it of course. Otherwise this would not make much sense, right?</p>
					<h4>Some other content</h4>
					<p>I should start using lorem ipsum here to write my material.</p>
				</Collapsible>
				<Collapsible/>
				<Collapsible
					suffixIcon="question-circle"
					suffixIconCollapsed="question-circle"
					suffixIconColor="purple"
				>
					<p>Maybe some help text here with a link <a target="_blank" rel="noopener noreferrer" href="https://yoast.com">Go to Yoast</a></p>
				</Collapsible>
			</WidgetContainer>
		</SortableContainer>
	);
}
