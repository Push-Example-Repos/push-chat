"use client";

import Image from "next/image";
import Link from "next/link";

const GithubCorner = () => {
  return (
    <Link
      href="https://github.com/Gautam25Raj/next-push-starter"
      target="_blank"
      rel="noreferrer"
    >
      <div className="fixed -top-1 right-0 w-20 h-20">
        <div className="github-corner absolute top-0 right-0"></div>
        <div className="absolute top-4 right-4">
          <Image
            src="/assets/social/github.svg"
            alt="Github Corner"
            width={40}
            height={40}
          />
        </div>

        <style jsx>{`
          .github-corner::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            border-style: solid;
            border-width: 0 120px 120px 0;
            border-color: transparent #ffffffb7 transparent transparent;
          }
        `}</style>
      </div>
    </Link>
  );
};

export default GithubCorner;
