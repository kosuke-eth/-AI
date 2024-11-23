import ReactMarkdown from 'react-markdown';

function Markdown({txt}: {txt: string}) {
  return <ReactMarkdown>{txt}</ReactMarkdown>;
}

export default Markdown;