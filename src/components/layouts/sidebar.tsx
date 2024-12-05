"use client";

import { useCurrentMember } from '@/hooks/use-current-member';
import { useParams } from 'next/navigation';
import React from 'react';
import { Id } from '../../../convex/_generated/dataModel';
import { useGetWorkspaceById } from '@/hooks/use-get-workspaces';
import { AlertTriangle, Loader } from 'lucide-react';

const Sidebar = () => {
    const params = useParams<{ workspaceId: string }>();
    const { data: member, isLoading: memberLoading } = useCurrentMember(params.workspaceId as Id<"workspaces">);
    const { data: workspace, isLoading: workspaceLoading} = useGetWorkspaceById(params.workspaceId as Id<"workspaces">);

    if (workspaceLoading || memberLoading) {
        return (
            <div className="flex flex-col h-full items-center justify-center">
                <Loader className='shrink-0 animate-spin size-5' />
            </div>
        )
    }

    if (!workspace || !member) {
        return (
            <div className="flex flex-col h-full items-center justify-center">
                <AlertTriangle className='shrink-0 size-5' />
                <p className="text-sm">
                    Workspace not found
                </p>
            </div>
        )
    }
  return (
    <div className='flex flex-col h-full'>
      
    </div>
  )
}

export default Sidebar
