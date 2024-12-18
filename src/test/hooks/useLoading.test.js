import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useLoading from '../../hooks/useLoadingSpinner';

describe('useLoading', () => {
    it('should initialize with loading set to false', () => {
        const { result } = renderHook(() => useLoading());
        // Initial state
        expect(result.current.loading).toBe(false);
    });

    it('should set loading to true when startLoading is called', () => {
        const { result } = renderHook(() => useLoading());

        // Act to simulate calling startLoading
        act(() => {
            result.current.startLoading();
        });

        // Assert the state after calling startLoading
        expect(result.current.loading).toBe(true);
    });

    it('should set loading to false when stopLoading is called', () => {
        const { result } = renderHook(() => useLoading());

        // Start loading first
        act(() => {
            result.current.startLoading();
        });

        // Stop loading
        act(() => {
            result.current.stopLoading();
        });

        // Assert the state after calling stopLoading
        expect(result.current.loading).toBe(false);
    });
});
