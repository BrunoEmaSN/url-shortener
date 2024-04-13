'use client'

import IconButton from "../iconButton";
import DocumentDuplicate from '../icons/document-duplicate';
import { ToastSuccess } from "../toast";

interface CardProps {
  url: string;
  shortUrl: string;
  description: string;
  className?: string;
}

export default function Card(props: CardProps) {
  const copyToClipboard = async (txt: string) => {
    try {
      const clipboardItem = new ClipboardItem({
        "text/plain": new Blob([txt], { type: "text/plain" }),
      });
      await navigator.clipboard.write([clipboardItem]);
    } catch (error) {
      await navigator.clipboard.writeText(txt);
    }
    ToastSuccess('Copied to clipboard');
  };

  return (
    <div className={`flex justify-between rounded-lg border border-zinc-800 bg-midnight bg-gray-800 p-4 transition-all hover:shadow-lg ${props.className}`} >
      <div className="truncate">
        <div className="flex items-center">
          <a
            className="text-xl text-gray-100 transition-all hover:text-gray-300"
            target="_blank"
            rel="noreferrer"
            href={props.shortUrl}
          >
            /{props.shortUrl}
          </a>
          <IconButton
          onClick={() => copyToClipboard(`${process.env.NEXT_PUBLIC_BASE_URL + props.shortUrl}`)}
            icon={<DocumentDuplicate />}
            className="ml-1 p-1 text-gray-500 transition-colors duration-200 hover:text-gray-200"
          />
        </div>
        <p className="mb-2 text-gray-500">{props.url}</p>
        <p className="text-gray-400">{props.description}</p>
      </div>
    </div>
  )
}
